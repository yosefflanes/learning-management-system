const Container = ({children, className = ''}) => {
  return (
    <div className={`flex flex-col max-w-6xl mx-auto px-4 mb-10 ${className}`}>{children}</div>
  );
};

export default Container;
