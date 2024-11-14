import { uuid } from '@utils';
import { Budget, BudgetGroup, BudgetYear } from './types';

export const generateBudget = (name: string): Budget => ({
  name,
  id: uuid(),
  values: new Array(12).fill(0)
});

export const generateBudgetGroup = (name: string, budgets: string[]): BudgetGroup => ({
  name,
  id: uuid(),
  budgets: budgets.map(generateBudget)
});

export const generateBudgetYear = (year: number): BudgetYear => ({
  year,
  income: [generateBudgetGroup('General', ['Other'])],
  expenses: [generateBudgetGroup('General', ['Other'])]
});

export const generateBudgetYearFromCurrent = (year: number, current: BudgetYear): BudgetYear => {
  function clearValues(value: BudgetGroup) {
    for (const budget of value.budgets) {
      budget.values = new Array(12).fill(0);
    }
    return value;
  }

  current.income = current.income.map(clearValues);
  current.expenses = current.expenses.map(clearValues);

  return {
    year,
    income: current.income,
    expenses: current.expenses
  };
};
