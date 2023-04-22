import React from "react";


export default function Footer() {
    return(
        <footer class="md:p-4 w-4/5 md:w-9/12 md:flex md:items-center md:p-6 sticky top-[100vh]">  
           <div>
          <p className="text-xs text-gray-400 mx-8 text-center mb-4">
            Copyright © CentrEd# 2023
          </p>
          <p className="text-xs text-gray-400 mx-8 text-center">
            This project does not distribute any copyrighted game assets. In order to run this client you'll need to legally obtain a copy of the Ultima Online Classic Client. Using a custom client to connect to official UO servers is strictly forbidden. We do not assume any responsibility of the usage of this client. Ultima Online(R) © 2022 Electronic Arts Inc. All Rights Reserved.
          </p>
          </div>
        </footer>
    );
}