const Card = ({ icon, title, description, image, noPaddingBorder = false }) => {
  return (
    <div
      className={`flex flex-col gap-3 min-w-75 max-w-92 min-h-45 rounded-lg hover:border-blue-400 ${noPaddingBorder ? "p-0 border-0" : "p-3 border border-[#CFD6E8]"}`}
    >
      {image && (
        <div>
          <img src={image} alt={title} />
        </div>
      )}
      {icon && (
        <div className="h-6 items-center">
          <img src={icon} alt={`${title} icon`} />
        </div>
      )}
      <div className='flex flex-col gap-3'>
        <h3 className="text-primary font-bold">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default Card;
