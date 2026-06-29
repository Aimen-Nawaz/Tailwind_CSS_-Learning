import { ShoppingCart } from 'lucide-react'
import { Badge } from "@/components/ui/badge";
import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useCart } from '../../store/CartStore'
import CartItemCard from '../Cart/CartItemCard'

const Navbar = () => {
    const { totalPrice, cartItems } = useCart()
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    return (
        <header className='w-full px-3 py-3 bg-black opacity-50 '>
            <Sheet>
                <div className='w-full max-w-7xl mx-auto flex items-center justify-between gap-4'>
                    <h1 className='text-white'>Product App</h1>

                    <ul className='flex items-center justify-between gap-3 text-white'>
                        <li>
                            <SheetTrigger asChild>
                                <button className="relative flex items-center justify-center">
                                    <ShoppingCart className="h-6 w-6 text-white" />

                                    {cartCount > 0 && (
                                        <Badge className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
                                            {cartCount}
                                        </Badge>
                                    )}
                                </button>
                            </SheetTrigger>
                        </li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/Posts'>Posts</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                        <li><Link to='/form'>Forms</Link></li>
                        <li><Link to='/registration'>Contact</Link></li>

                    </ul>
                </div>
                <SheetContent className="bg-background text-foreground border-l border-border">
                    <SheetHeader>
                        <SheetTitle>Shoping Cart</SheetTitle>
                        <SheetDescription>
                            Your selected items in the cart. You can remove items or proceed to checkout.
                        </SheetDescription>
                    </SheetHeader>
                    <div className={`w-full h-full flex items-center ${cartItems.length > 0 ? "flex-col justify-start" : "justify-center"}`}>
                        {(!cartItems || cartItems.length === 0) && (
                            <h1 className='text-2xl font-bold'>Cart is empty</h1>
                        )}
                        {
                            cartItems?.map((item) => (
                                <CartItemCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                    <div className=' w-full flex items-center justify-between flex-col gap-2'>
                        <div className="w-full p-4 rounded-md border border-zinc-600 bg-secondary flex items-center justify-between">

                            <p className="text-lg font-semibold text-foreground">
                                Grand Total
                            </p>

                            <p className="text-2xl font-bold text-emerald-400">
                                ${totalPrice.toFixed(0)}
                            </p>

                        </div>

                        <Button className="px-6 w-full rounded-md py-6 text-lg items-center text-white hover:bg-green-600" onClick={() => toast.success('Proceeding to checkout...')}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </header>


    )
}

export default Navbar
