import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            action.setBalance(action.balance + 10);
            return [...state, action.name];

        case "fuel":
            if (action.balance > 50) {
                action.setBalance(action.balance - 50);
            }
            return state;
    }
};

export default reducer;
