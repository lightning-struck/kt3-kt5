import { Container } from "@/app/shared/components/UIKIT/Container/Container"
import AdminNavbar from "../components/AdminNavbar"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <Container>
            <div className="flex gap-2">
                <div>
                <AdminNavbar/>
            </div>
                {children}
            </div>
        </Container>
    );
}