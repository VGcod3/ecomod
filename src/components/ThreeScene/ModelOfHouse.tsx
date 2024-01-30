import { useLoader } from '@react-three/fiber'
import { OBJLoader, MTLLoader } from "three-stdlib";


const ModelOfHouse = () => {

    const materials = useLoader(MTLLoader, "/House.mtl");
    const model = useLoader(OBJLoader, '/House.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <primitive object={model} />
    )
}

export default ModelOfHouse;