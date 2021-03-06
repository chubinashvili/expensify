import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with a singe expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTottal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTottal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});