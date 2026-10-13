'use client'

import Link from "next/link"
import {Menu, Bell, CircleSmall, ClipboardMinus, Clock, Cuboid, LayoutDashboard, LogOut, SquareMenu, SquareText, Store, UserRoundStar } from "lucide-react";
import { useRef } from "react";



export default function Sidebar() {
const sidebarRef=useRef()
    function handleSidebar() {
        if (sidebarRef.current.style.transform == 'translateX(0%)') {
            
            sidebarRef.current.style.transform = 'translateX(-70%)';
        }
        else{
            sidebarRef.current.style.transform = 'translateX(0%)'
        }
        
    }



    return (
        <div ref={sidebarRef} className="sidebar" style={{transform:'translateX(0%)'}}>
            <div className="group-1">
                <div className="logobox">
                    
                    <h1>Admin Dashboard</h1>
                    <Menu onClick={handleSidebar} className="menuButton"/>
                </div>
                <div className="side-nav">
                    <Link href="/"><LayoutDashboard /> Dashboard</Link>
                    <Link href="/marketing"><Store /> Marketing</Link>
                    <Link href="/orders"><Cuboid /> Orders</Link>
                    <Link href="/rating"><UserRoundStar /> Raitings and Reviews</Link>
                    <Link href="/"><ClipboardMinus /> Reports</Link>
                    <Link href="/"><CircleSmall /> Concepts</Link>
                    <Link href="/"><Bell /> Notification Centre</Link>
                    <Link href="/"><SquareMenu /> Menu Management</Link>
                    <Link href="/"><Clock /> Opening Times</Link>
                    <Link href="/"><SquareText />Invoices</Link>
                </div>
            </div>

            <div className="logoutbox">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./favicon.ico" alt="User Profile" />
                    <p>USername</p>
                </div>
                <button> Logout <LogOut /></button>
            </div>
        </div>
    )
}