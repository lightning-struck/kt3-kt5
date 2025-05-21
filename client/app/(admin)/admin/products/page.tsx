'use client'
import Button from "@/app/shared/components/UIKIT/Button/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [asc, setAsc] = useState<boolean>(true)
    const [filter, setFilter] = useState<string>("id")
    const [checked, setChecked] = useState<string[]>([])
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {['id', 'price'].map((i,idx) =>
                            <TableHead key={idx}
                                onClick={() => {
                                    setAsc(!asc)
                                    setFilter(i)
                                }} 
                            >
                                <div className="flex gap-2 cursor-pointer hover:text-foreground-900">
                                    {i}
                                    {filter === i ? 
                                        asc ? <ChevronUp /> : <ChevronDown />
                                        : <></>
                                    }
                                </div>
                            </TableHead>
                        )}
                        <TableHead>title</TableHead>
                        <TableHead>
                            <Popover>
                                <PopoverTrigger>
                                    category
                                </PopoverTrigger>
                                <PopoverContent>
                                    {['Phones', 'Watches', "Computers"].map((i, idx) =>
                                     <div className="flex gap-2 items-center">
                                        <Checkbox 
                                            checked={checked.includes(i)}
                                            onCheckedChange={() => {
                                                if (checked.includes(i)){
                                                    setChecked(prev => prev.filter(e => e !== i) )
                                                } else{
                                                    setChecked(prev => [...prev, i])
                                                }
                                            }}
                                            />
                                        {i}
                                     </div>
                                    )}
                                </PopoverContent>
                            </Popover>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Apple Iphone 13 Pro Max</TableCell>
                        <TableCell>Phones</TableCell>
                        <TableCell>$500,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Apple Iphone 13 Pro Max</TableCell>
                        <TableCell>Phones</TableCell>
                        <TableCell>$500,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Apple Iphone 13 Pro Max</TableCell>
                        <TableCell>Phones</TableCell>
                        <TableCell>$500,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Apple Iphone 13 Pro Max</TableCell>
                        <TableCell>Phones</TableCell>
                        <TableCell>$500,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Apple Iphone 13 Pro Max</TableCell>
                        <TableCell>Phones</TableCell>
                        <TableCell>$500,00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}