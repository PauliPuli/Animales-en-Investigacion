const animales=(()=>{
        const getData = async () => {
            const api = await fetch("../../../animales.json");
            const { animales } = await api.json();
            return animales;
          };
    return{
       getData
    }
})();

export default animales


