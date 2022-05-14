import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../Hooks/useFirebase';

const Signin = () => {
    const { register, handleSubmit } = useForm();
    const {handleGoogleSignin} = useFirebase();

    const onSubmit = () => {

    }
    return (
        <div className="flex justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true})} type="email" placeholder="Enter Email" class="input my-2 input-bordered input-secondary w-full max-w-xs" />
            <input {...register("password", { required: true, pattern: /^[A-Za-z]+$/i })} type="password" placeholder="Enter Password" class="input my-2 input-bordered input-secondary w-full max-w-xs" />
            <input className='input my-2 cursor-pointer input-bordered input-secondary bg-secondary text-white w-full max-w-xs' type="submit" value="Sign In" />
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignin} class="btn btn-wide flex mx-auto">Continue With Google</button>
  </div>
</div>
            
        </div>
    );
};

export default Signin;