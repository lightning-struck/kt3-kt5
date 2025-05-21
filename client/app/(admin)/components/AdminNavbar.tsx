import { CircleUserRound, House, LogOut, TableProperties, UsersRound } from "lucide-react";
import Link from "next/link";

export default function AdminNavbar() {
    return (
        <div className="p-4 rounded-md border border-gray-400 border-solid flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <CircleUserRound /> user
            </div>
            <div className="flex gap-2 items-center">
                <House /> <Link href={'/admin'}>Главная</Link>
            </div>
            <div className="flex gap-2 items-center">
                <UsersRound /> <Link href={'/admin/users'}>Пользователи</Link>
            </div>
            <div className="flex gap-2 items-center" >
                <TableProperties /> <Link href={'/admin/products'}>Товары</Link>
            </div>
            <div className="flex gap-2 items-center" >
                <LogOut /> Выход
            </div>
        </div>
    );
}