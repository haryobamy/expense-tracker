'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', income: 222, expenditure: 150 },
  { date: '2024-04-02', income: 97, expenditure: 180 },
  { date: '2024-04-03', income: 167, expenditure: 120 },
  { date: '2024-04-04', income: 242, expenditure: 260 },
  { date: '2024-04-05', income: 373, expenditure: 290 },
  { date: '2024-04-06', income: 301, expenditure: 340 },
  { date: '2024-04-07', income: 245, expenditure: 180 },
  { date: '2024-04-08', income: 409, expenditure: 320 },
  { date: '2024-04-09', income: 59, expenditure: 110 },
  { date: '2024-04-10', income: 261, expenditure: 190 },
  { date: '2024-04-11', income: 327, expenditure: 350 },
  { date: '2024-04-12', income: 292, expenditure: 210 },
  { date: '2024-04-13', income: 342, expenditure: 380 },
  { date: '2024-04-14', income: 137, expenditure: 220 },
  { date: '2024-04-15', income: 120, expenditure: 170 },
  { date: '2024-04-16', income: 138, expenditure: 190 },
  { date: '2024-04-17', income: 446, expenditure: 360 },
  { date: '2024-04-18', income: 364, expenditure: 410 },
  { date: '2024-04-19', income: 243, expenditure: 180 },
  { date: '2024-04-20', income: 89, expenditure: 150 },
  { date: '2024-04-21', income: 137, expenditure: 200 },
  { date: '2024-04-22', income: 224, expenditure: 170 },
  { date: '2024-04-23', income: 138, expenditure: 230 },
  { date: '2024-04-24', income: 387, expenditure: 290 },
  { date: '2024-04-25', income: 215, expenditure: 250 },
  { date: '2024-04-26', income: 75, expenditure: 130 },
  { date: '2024-04-27', income: 383, expenditure: 420 },
  { date: '2024-04-28', income: 122, expenditure: 180 },
  { date: '2024-04-29', income: 315, expenditure: 240 },
  { date: '2024-04-30', income: 454, expenditure: 380 },
  { date: '2024-05-01', income: 165, expenditure: 220 },
  { date: '2024-05-02', income: 293, expenditure: 310 },
  { date: '2024-05-03', income: 247, expenditure: 190 },
  { date: '2024-05-04', income: 385, expenditure: 420 },
  { date: '2024-05-05', income: 481, expenditure: 390 },
  { date: '2024-05-06', income: 498, expenditure: 520 },
  { date: '2024-05-07', income: 388, expenditure: 300 },
  { date: '2024-05-08', income: 149, expenditure: 210 },
  { date: '2024-05-09', income: 227, expenditure: 180 },
  { date: '2024-05-10', income: 293, expenditure: 330 },
  { date: '2024-05-11', income: 335, expenditure: 270 },
  { date: '2024-05-12', income: 197, expenditure: 240 },
  { date: '2024-05-13', income: 197, expenditure: 160 },
  { date: '2024-05-14', income: 448, expenditure: 490 },
  { date: '2024-05-15', income: 473, expenditure: 380 },
  { date: '2024-05-16', income: 338, expenditure: 400 },
  { date: '2024-05-17', income: 499, expenditure: 420 },
  { date: '2024-05-18', income: 315, expenditure: 350 },
  { date: '2024-05-19', income: 235, expenditure: 180 },
  { date: '2024-05-20', income: 177, expenditure: 230 },
  { date: '2024-05-21', income: 82, expenditure: 140 },
  { date: '2024-05-22', income: 81, expenditure: 120 },
  { date: '2024-05-23', income: 252, expenditure: 290 },
  { date: '2024-05-24', income: 294, expenditure: 220 },
  { date: '2024-05-25', income: 201, expenditure: 250 },
  { date: '2024-05-26', income: 213, expenditure: 170 },
  { date: '2024-05-27', income: 420, expenditure: 460 },
  { date: '2024-05-28', income: 233, expenditure: 190 },
  { date: '2024-05-29', income: 78, expenditure: 130 },
  { date: '2024-05-30', income: 340, expenditure: 280 },
  { date: '2024-05-31', income: 178, expenditure: 230 },
  { date: '2024-06-01', income: 178, expenditure: 200 },
  { date: '2024-06-02', income: 470, expenditure: 410 },
  { date: '2024-06-03', income: 103, expenditure: 160 },
  { date: '2024-06-04', income: 439, expenditure: 380 },
  { date: '2024-06-05', income: 88, expenditure: 140 },
  { date: '2024-06-06', income: 294, expenditure: 250 },
  { date: '2024-06-07', income: 323, expenditure: 370 },
  { date: '2024-06-08', income: 385, expenditure: 320 },
  { date: '2024-06-09', income: 438, expenditure: 480 },
  { date: '2024-06-10', income: 155, expenditure: 200 },
  { date: '2024-06-11', income: 92, expenditure: 150 },
  { date: '2024-06-12', income: 492, expenditure: 420 },
  { date: '2024-06-13', income: 81, expenditure: 130 },
  { date: '2024-06-14', income: 426, expenditure: 380 },
  { date: '2024-06-15', income: 307, expenditure: 350 },
  { date: '2024-06-16', income: 371, expenditure: 310 },
  { date: '2024-06-17', income: 475, expenditure: 520 },
  { date: '2024-06-18', income: 107, expenditure: 170 },
  { date: '2024-06-19', income: 341, expenditure: 290 },
  { date: '2024-06-20', income: 408, expenditure: 450 },
  { date: '2024-06-21', income: 169, expenditure: 210 },
  { date: '2024-06-22', income: 317, expenditure: 270 },
  { date: '2024-06-23', income: 480, expenditure: 530 },
  { date: '2024-06-24', income: 132, expenditure: 180 },
  { date: '2024-06-25', income: 141, expenditure: 190 },
  { date: '2024-06-26', income: 434, expenditure: 380 },
  { date: '2024-06-27', income: 448, expenditure: 490 },
  { date: '2024-06-28', income: 149, expenditure: 200 },
  { date: '2024-06-29', income: 103, expenditure: 160 },
  { date: '2024-06-30', income: 446, expenditure: 400 },
];

const chartConfig = {
  views: {
    label: 'transactions',
  },
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-2))',
  },
  expenditure: {
    label: 'Expenses',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function Analytics() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('income');

  const total = React.useMemo(
    () => ({
      income: chartData.reduce((acc, curr) => acc + curr.income, 0),
      expenditure: chartData.reduce((acc, curr) => acc + curr.expenditure, 0),
    }),
    []
  );
  return (
    <section className='min-h-screen bg-gray-50 px-4 py-6'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Analytics</h2>

      <Card>
        <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
          <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
            <CardTitle>Total Balance</CardTitle>
            <CardDescription className='text-black text-xl font-semibold'>
              ₦{total.income.toLocaleString()}
            </CardDescription>
          </div>
          <div className='flex'>
            {['income', 'expenditure'].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                  onClick={() => setActiveChart(chart)}
                >
                  <span className='text-xs text-muted-foreground'>
                    {chartConfig[chart].label}
                  </span>
                  <span className='text-lg font-bold leading-none sm:text-3xl'>
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className='px-2 sm:p-6'>
          <ChartContainer
            config={chartConfig}
            className='aspect-auto h-[250px] w-full'
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='date'
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className='w-[150px]'
                    nameKey='views'
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      });
                    }}
                  />
                }
              />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
}
