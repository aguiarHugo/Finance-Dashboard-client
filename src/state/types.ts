export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;

  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;

  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  createdAt: string;
  updatedAt: string;

  __v: number;
  totalProfit: number;
  totalRevenue: number;
  TotalExpenses: number;

  expenseByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  createdAt: string;
  updatedAt: string;

  __v: number;
  price: number;
  expense: number;
  
  transactions: Array<string>;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  buyer: string;
 
  __v: number;
  amount: number;

  productsId: Array<string>;
}

