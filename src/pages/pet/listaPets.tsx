import React from "react";
import Pet from "../../model/pet";

type props = {
    pets: Pet[],
    selecionarPetParaEdicao: (pet: Pet) => void,
    excluirPet: (id: number) => void,
    navegarParaCadastroPet: () => void,
}

const ListaPet: React.FC<props> = (props) => {
    return (
        <div className="container-fluid">
            <button className="btn btn-primary mb-2" onClick={props.navegarParaCadastroPet}>Cadastrar Novo Pet</button>
            <div className="list-group">
                {props.pets.map((pet, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{pet.nome} ({pet.getRaca})</h5>
                            <p className="card-text">Tipo: {pet.getTipo}</p>
                            <p className="card-text">Gênero: {pet.getGenero}</p>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" onClick={() => props.selecionarPetParaEdicao(pet)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => props.excluirPet(pet.id)}>Excluir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaPet;