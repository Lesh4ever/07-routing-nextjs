import css from "@/components/Home/Home.module.css";

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>Oh no, not that! 404 - Page not found</h1>
      <p className={css.description}>
        Sorry, but you are come to the wrong place!
      </p>
    </div>
  );
};

export default NotFound;
