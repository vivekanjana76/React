import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = [ "Baked Beans", "Baked Sweet Potatoess", "Baked Potatoes" ];

const MealsProvider = ({children}) => {

    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;