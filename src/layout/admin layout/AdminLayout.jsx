import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import HeaderAdmin from "./header/Header"




const AdminLayout = () => {
  return (
   <Fragment>
    <HeaderAdmin />
    <Outlet />
    <Footer />
   </Fragment>
  )
}

export default AdminLayout