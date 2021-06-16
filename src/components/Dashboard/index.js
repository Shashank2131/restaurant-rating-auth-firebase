import React from "react";
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Typography } from '@material-ui/core'

import firebase from '../firebase'


function Dashboard(props) {
    
    return (
        <div>
        <Navigation/>
        <div className="home">
				<Typography component="h1" variant="h5" class="font-style-Mate SC">
					Hello { firebase.getCurrentUsername() }
				</Typography>
        <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-7">
         <img
            class="img-fluid rounded mb-5 mb-lg-10"
            src="https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vZnRvcCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
         />
        </div>
        <div class="col-lg-5">
        <h1 class="font-weight-bold">About</h1>
        <p class="font-style-Courier New">
            Restaurant-Rate & Review is a Web-Application platform for the customers to provide their valuable reviews and ratings of the particular restaurants.
        </p>
        </div>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    );
    
}
export default Dashboard;