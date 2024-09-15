import React from 'react'
import SubscriptionCard from './SubscriptionCard';
import { useSelector } from 'react-redux';

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Access Control",
];

const annualPlan = [
    "Add Unlimited Project",
    "Access To Live Chat",
    "Add Unlimited Team Member",
    "Advanced Reporting",
    "Priority Support",
    "Monthly Plan Benifite Included",
];

const paidPlan = [
    "Add Unlimited Project",
    "Access To Live Chat",
    "Add Unlimited Team Member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Option",
    "Integration Support",
    "Advanced Security",
    "Training And Resources",
    "Access Control",
    "Custom WorkFlows",
];

const Subscription = () => {

    const {subscription} = useSelector(store=>store)

  return (
    <div className='p-10'>
      <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
        <SubscriptionCard
            data={{
                planName: "Free",
                features: freePlan,
                planType: "FREE",
                price: 0,
                buttonName: subscription.userSubscription?.planType == 'FREE' ? "Current Plan" : "Get Started",
            }}
        />
        <SubscriptionCard
            data={{
                planName: "Monthly Paid Plan",
                features: paidPlan,
                planType: "MONTHLY",
                price: 799,
                buttonName: subscription.userSubscription?.planType == 'MONTHLY' ? "Current Plan" : "Get Started",
            }}
        />
        <SubscriptionCard
            data={{
                planName: "Annual Paid Plan",
                features: annualPlan,
                planType: "ANNUALLY",
                price: 6799,
                buttonName: subscription.userSubscription?.planType == 'ANNUALLY' ? "Current Plan" : "Get Started",
            }}
        />
      </div>
    </div>
  )
}

export default Subscription
