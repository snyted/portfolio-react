const BubbleEffect = () => {
    return (

      <div className="absolute inset-0 overflow-hidden -z-10"> 
      
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-50 blob-animation"></div>
  
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-50 blob-animation-2"></div>
      </div>
    );
  };
  
  export default BubbleEffect;