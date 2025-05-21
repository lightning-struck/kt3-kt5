import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import UsersChart from "../components/UsersChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Page() {
    return (
        <div className="flex justify-between w-full">
            {/* charts */}
            <div>
                <UsersChart/>
                {/* Bar Chart - Custom Label */}
            </div>
            {/* orders */}
            <div>
                <Card>
                    <CardHeader>
                        <h1>Recent orders</h1>
                        <h2>Total orders: 245</h2>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                       {[...Array(6)].map((i, idx) => 
                            <Dialog key={idx}>
                                <DialogTrigger>
                                    <div className="flex items-center gap-4" >
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1>John Doe</h1>
                                            <h2>johndoe@example.com</h2>
                                        </div>
                                        <div>
                                            +$1,999.00
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>
                                                    id
                                                </TableHead>
                                                <TableHead>
                                                    title
                                                </TableHead>
                                                <TableHead>
                                                    count
                                                </TableHead>
                                                <TableHead>
                                                    price
                                                </TableHead>
                                                <TableHead>
                                                    total
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Apple Iphone 14 Pro Max</TableCell>
                                                <TableCell>2</TableCell>
                                                <TableCell>$1,000.00</TableCell>
                                                <TableCell>$2,000.00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell colSpan={4}>Total:</TableCell>
                                                <TableCell className="text-right">$2,500.00</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </DialogContent>
                            </Dialog>   
                        )}
                    </CardContent>
                     {/* <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
                    <CardFooter>
                        Total: +$24,999.00
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}