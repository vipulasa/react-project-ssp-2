import { Outlet } from "react-router-dom";

import Link from "../components/link";

export default function Root() {
    return (
      <>
        <div className="bg-blue-400">
          <h1>Primary Template (APP BLADE)</h1>    
          <nav>
            <ul>
              <li>
                <Link href={`https://www.google.com`}>
                    Google
                </Link>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/about`}>About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
            <Outlet />
        </div>
      </>
    );
  }