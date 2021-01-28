import s from './style.module.css'

const HeaderBlock = ({title, description}) => {
  return (
    <div>
      <div>
        {title && (<h1 className={s.header}>
            {title}
          </h1>)}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HeaderBlock;
