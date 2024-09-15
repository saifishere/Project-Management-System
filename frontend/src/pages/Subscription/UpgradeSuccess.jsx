import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserSubscription, upgradeSubscription } from '../Redux/Subscription/Action'

const UpgradeSuccess = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {subscription} = useSelector(store=>store)

    const queryParams = new URLSearchParams(location.search);

    const paymentId = queryParams.get("payment_id")
    const planType = queryParams.get("planType")

    useEffect(()=>{
        dispatch(upgradeSubscription({planType}))
        dispatch(getUserSubscription())
    }, [])

  return (
    <div className='flex justify-center'>
      <Card className='mt-20 p-6 space-y-5 flex flex-col items-center'>
        <div className='flex items-center gap-4'>
            <CheckCircledIcon className='h-9 w-9 text-green-600' />
            <p className='text-xl'>Plan Upgraded Successfully</p>
        </div>
        <div className='space-y-3'>
            <p className='text-green-600'>Start date: {subscription.userSubscription?.subscriptionStartDate} </p>
            <p className='text-red-500'>Ende date: {subscription.userSubscription?.subscriptionEndDate} </p>
            <p>Plan type: {subscription.userSubscription?.planType}</p>
        </div>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </Card>
    </div>
  )
}

export default UpgradeSuccess
