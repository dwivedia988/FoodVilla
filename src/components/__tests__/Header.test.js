import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    //Check if the logo is loaded
    const logo = header.getByTestId("logo");

    expect(logo.src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&usqp=CAU");

    
} );

test("Online status should be grean on rendering header", () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    //Check if the logo is loaded
    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("✅");

    
} );

test("Cart should have 0 items on rendering header", () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    //Check if the logo is loaded
    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart- 0 items");

    
} );