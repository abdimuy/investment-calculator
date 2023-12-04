"use client";
import { useState } from "react";
import {
  Button,
  Card,
  Flex,
  Grid,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FormProps } from "./home.types";
import AnimatedNumber from "@/components/CalculatedResult/AnimatedNumber";

const Form: React.FC<FormProps> = ({ form, results }) => {
  const [formState, setFormState] = useState({
    initialAmount: 1000,
    investmentTerm: 1,
    estimatedAnnualInterestRate: 5,
    additionalContribution: 0,
    additionalContributionType: "year",
    investmentTermType: "month",
  });
  const [result, setResult] = useState({
    total: 0,
    totalInvested: 0,
    totalInterestsEarned: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSelectChange = (field: string, e: string) => {
    setFormState({
      ...formState,
      [field]: e,
    });
  };

  const calculate = () => {
    const {
      initialAmount,
      investmentTerm,
      estimatedAnnualInterestRate,
      additionalContribution,
      additionalContributionType,
      investmentTermType,
    } = formState;

    const totalInvestment =
      initialAmount + additionalContribution * 12 * investmentTerm;

    const interestRate = estimatedAnnualInterestRate / 100;

    const resultInitialAmount =
      initialAmount * (1 + interestRate / 12) ** (12 * investmentTerm);

    const resultAdditionalContribution =
      additionalContribution *
      (((1 + interestRate / 12) ** (investmentTerm * 12) - 1) /
        (interestRate / 12)) *
      (1 + interestRate / 12);

    const result = resultInitialAmount + resultAdditionalContribution;

    const totalInterestGained = result - totalInvestment;

    setResult({
      total: result,
      totalInvested: totalInvestment,
      totalInterestsEarned: totalInterestGained,
    });
  };

  return (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="1">
          <Text>{form.initialAmount.label}</Text>
          <TextField.Root>
            <TextField.Slot>
              <Text>$</Text>
            </TextField.Slot>
            <TextField.Input
              type="number"
              min={0}
              onChange={handleInputChange}
              name="initialAmount"
              value={formState.initialAmount}
            />
          </TextField.Root>
        </Flex>
        <Flex direction="column" gap="1">
          <Text>{form.investmentTerm.label}</Text>
          <Flex direction="row" gap="1">
            <TextField.Root style={{ width: "100%" }}>
              <TextField.Input
                size="2"
                type="number"
                min={0}
                onChange={handleInputChange}
                name="investmentTerm"
                value={formState.investmentTerm}
              />
            </TextField.Root>
            <Select.Root
              defaultValue="apple"
              onValueChange={(e) => handleSelectChange("investmentTermType", e)}
              value={formState.investmentTermType}
            >
              <Select.Trigger />
              <Select.Content position="popper">
                <Select.Item value="month">Month</Select.Item>
                <Select.Item value="year">Year</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>
        <Flex direction="column" gap="1">
          <Text>{form.estimatedAnnualInterestRate.label}</Text>
          <TextField.Root>
            <TextField.Slot>
              <Text>%</Text>
            </TextField.Slot>
            <TextField.Input
              type="number"
              min={0}
              onChange={handleInputChange}
              name="estimatedAnnualInterestRate"
              value={formState.estimatedAnnualInterestRate}
            />
          </TextField.Root>
        </Flex>
        <Flex direction="column" gap="1">
          <Text>{form.additionalContribution.label}</Text>
          <Flex direction="row" gap="1">
            <TextField.Root style={{ width: "100%" }}>
              <TextField.Slot>
                <Text>$</Text>
              </TextField.Slot>
              <TextField.Input
                type="number"
                min={0}
                onChange={handleInputChange}
                name="additionalContribution"
                value={formState.additionalContribution}
              />
            </TextField.Root>
            <Select.Root
              defaultValue="month"
              onValueChange={(e) =>
                handleSelectChange("additionalContributionType", e)
              }
              value={formState.additionalContributionType}
            >
              <Select.Trigger />
              <Select.Content position="popper">
                <Select.Item value="month">Month</Select.Item>
                <Select.Item value="year">Year</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>

        <Button
          onClick={calculate}
          mt="4"
          size={{
            initial: "2",
            sm: "3",
          }}
        >
          Calculate
        </Button>
      </Flex>
      <Grid
        columns={{
          initial: "1",
          sm: "3",
        }}
        gap="4"
      >
        <Card>
          <Flex direction="column" gap="4" py="1" px="2">
            <Text size="3" color="gray">
              {results.totalInvested.label}
            </Text>
            <Text size="6" weight="bold" color="indigo">
              <AnimatedNumber number={result.totalInvested} />
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="4" py="1" px="2">
            <Text size="3" color="gray">
              {results.total.label}
            </Text>
            <Text size="6" weight="bold" color="indigo">
              <AnimatedNumber number={result.total} />
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="4" py="1" px="2">
            <Text size="3" color="gray">
              {results.interestEarned.label}
            </Text>
            <Text size="6" weight="bold" color="indigo">
              <AnimatedNumber number={result.totalInterestsEarned} />
            </Text>
          </Flex>
        </Card>
      </Grid>
    </Flex>
  );
};

export default Form;
