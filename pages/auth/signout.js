import React from 'react'
import { GetServerSideProps } from 'next'

const SignOut = () => {
  return (
    <div>Your are Signed Out</div>
  )
}

export default SignOut;

export const getServerSideProps = async (context) => {
    console.log(context.req.cookies);
    return {
        props: {}
    }
};