import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Home Made Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                made by your local home cooks!
            </p>
        </section>
    );
};

export default MealsSummary;