import { useLoader } from '@react-three/fiber'
import { OBJLoader, GLTFLoader, MTLLoader } from "three-stdlib";


const ModelOfHouse = () => {

    const materials = useLoader(MTLLoader, "/House.mtl");
    const model = useLoader(OBJLoader, '/House.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    // const model = useLoader(OBJLoader, '/model.obj');

    // const model = useLoader(GLTFLoader, '/model.gltf')

    console.log(model);

    return (
        <primitive object={model} />
    )
}

export default ModelOfHouse;