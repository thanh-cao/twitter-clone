import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const { PrimaryButton, SecondaryButton } = require('../components/Buttons');

export default class Home extends Component {
    render() {
        return (
            <div className="flex flex-col sm:flex-row bg-black sm:h-screen">
                <div className="mx-auto my-auto px-10 py-10 xl:pt-14">
                    <div className="text-left">
                        <div className="w-10 text-white mb-10">
                            <svg viewBox="0 0 24 24" aria-label="Twitter"><g><path fill="white" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                        </div>
                        <h1 className="tracking-tight font-extrabold text-slate-200 text-5xl sm:text-7xl">
                            <span className="inline sm:block">Happening</span> <span className="">now</span>
                        </h1>

                        <h2 className="text-slate-200 text-3xl sm:text-4xl font-bold my-10">Join Tweatter today.</h2>

                        <div className="mt-5 sm:mt-8 flex flex-col w-72">
                            <PrimaryButton href="/users/register" text="Sign up with username" />
                            <p className="text-slate-700 display:block text-xs mt-3 mb-10">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                            <p className="mt-15 mb-5 text-slate-100">Already have an account?</p>
                            <SecondaryButton href="/users/login" text="Sign in" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-96 sm:h-full lg:w-1/2">
                    <div className="relative h-full">
                        <img
                            className="absolute top-0 left-0 h-full w-full object-cover"
                            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
                            alt=""
                        />
                        <svg viewBox="0 0 24 24" className="absolute w-1/2 md:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><g><path fill="white" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                </div>
            </div>
        )
    }
}

// export default class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Happening now</h1>
//                 <h2>Join Twitter today.</h2>
//                 <ul>
//                     <li><Link to="/users/login">Sign in</Link></li>
//                     <li><Link to="/users/register">Sign up</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }