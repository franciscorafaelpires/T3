import React, { useState, useEffect } from "react";
import Pet from "../../model/pet";

type props = {
    cadastrarPet: (pet: Pet) => void,
    petEmEdicao: Pet | null,
    atualizarPet: (pet: Pet) => void,
}

const FormularioCadastroPet: React.FC<props> = (props) => {
    const [nome, setNome] = useState(props.petEmEdicao?.getNome || '');
    const [raca, setRaca] = useState(props.petEmEdicao?.getRaca || '');
    const [genero, setGenero] = useState(props.petEmEdicao?.getGenero || '');
    const [tipo, setTipo] = useState(props.petEmEdicao?.getTipo || '');

    useEffect(() => {
        setNome(props.petEmEdicao?.getNome || '');
        setRaca(props.petEmEdicao?.getRaca || '');
        setGenero(props.petEmEdicao?.getGenero || '');
        setTipo(props.petEmEdicao?.getTipo || '');
    }, [props.petEmEdicao]);

    const isEditing = props.petEmEdicao !== null
    return (
        <div className="container-fluid">
            <div className="card p-4">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" value={raca} onChange={(e) => setRaca(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" value={genero} onChange={(e) => setGenero(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-primary" type="button" onClick={() => {
                            if (isEditing) {
                                const petAtualizado = new Pet(props.petEmEdicao!.id, nome, raca, genero, tipo)
                                props.atualizarPet(petAtualizado)
                            } else {
                                props.cadastrarPet(new Pet(Math.random(), nome, raca, genero, tipo))
                            }
                        }}>{isEditing ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioCadastroPet;