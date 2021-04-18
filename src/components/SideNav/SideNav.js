import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import css from './SideNav.css'

const SideNav = () => {
    return (
        <div className="bg-custom">
            <div className="border-right ">
                <Link to="/manageProduct"><p className="text-light"><FontAwesomeIcon icon={faTasks} /> Manage Product</p></Link>
                <Link to='/addProduct'><p className="text-light"><FontAwesomeIcon className="" icon={faPlus} /> Add Product</p></Link>
                <Link to="/notFound"><p className="text-light"><FontAwesomeIcon className="" icon={faEdit} /> Edit Product</p></Link>
            </div>
        </div>
    );
};

export default SideNav;