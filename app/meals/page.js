import Link from "next/link";
import { Suspense } from "react";

import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

import classes from "./page.module.css";

export const metadata = {
    title: 'All meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

function Meals() {
    const meals = getMeals();

    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>Delicious meal, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose your fasvorite recipe and cook it yourself. It`s easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share/">Share your favorite recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals />
            </Suspense>        
        </main>
    </>;
}