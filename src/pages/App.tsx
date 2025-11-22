import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from '../features/users/UsersPage';
import MapPage from './MapPage';
export default function App(){return(<div><nav className='bg-gray-300 shadow-sm px-4 py-3 flex gap-4'><Link className='text-brand-500 font-bold text-4xl hover:text-blue-700' to='/'>Users</Link><Link className='text-brand-500 text-4xl hover:text-blue-700 font-bold' to='/map'>Map</Link></nav><main className='p-4'><Routes><Route path='/' element={<UsersPage/>}/><Route path='/map' element={<MapPage/>}/></Routes></main></div>);}