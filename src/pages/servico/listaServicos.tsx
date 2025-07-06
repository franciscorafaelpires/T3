import React from "react";
import Servico from "../../model/servico";

type props = {
    servicos: Servico[],
    selecionarServicoParaEdicao: (servico: Servico) => void,
    excluirServico: (id: number) => void,
    navegarParaCadastroServico: () => void,
}

const ListaServico: React.FC<props> = (props) => {
    return (
        <div className="container-fluid">
            <button className="btn btn-primary mb-2" onClick={props.navegarParaCadastroServico}>Cadastrar Novo Serviço</button>
            <div className="list-group">
                {props.servicos.map((servico, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{servico.nome}</h5>
                            <p className="card-text">Preço: R$ {servico.preco.toFixed(2)}</p>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" onClick={() => props.selecionarServicoParaEdicao(servico)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => props.excluirServico(servico.id)}>Excluir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaServico;