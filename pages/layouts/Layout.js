import NavBar from '../components/NavBar';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Meta />
            <NavBar />
            <section className="w-full px-6 pb-12 antialiased bg-white" data-tails-scripts="//unpkg.com/alpinejs">
                <div className="mx-auto max-w-7xl">
                    <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
                        {children}
                    </div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}