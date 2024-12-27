"use client";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from '@nextui-org/react';
import { user as PrismaUser } from '@prisma/client';
import React from 'react'


interface Props{
    user : PrismaUser;
}
const UserProfilePanel = ({user}: Props) => (
    <Dropdown placement="bottom-start">
        <DropdownTrigger>
            <User
                as="button"
                avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform"
                description="@tonyreichert"
                name="Tony Reichert" />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
            
            <DropdownItem key="logout" color="danger">
                Log Out
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
)

export default UserProfilePanel
