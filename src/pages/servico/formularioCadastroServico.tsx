import React, { useState, useEffect } from "react";
import Servico from "../../model/servico";

type props = {
    cadastrarServico: (servico: Servico) => void,
    servicoEmEdicao: Servico | null,
    atualizarServico: (servico: Servico) => void,
}

const FormularioCadastroServico: React.FC<props> = (props) => {
    const [nome, setNome] = useState(props.servicoEmEdicao?.nome || '');
    const [preco, setPreco] = useState(props.servicoEmEdicao?.preco || 0);

    useEffect(() => {
        setNome(props.servicoEmEdicao?.nome || '');
        setPreco(props.servicoEmEdicao?.preco || 0);
    }, [props.servicoEmEdicao]);

    const isEditing = props.servicoEmEdicao !== null
    return (
        <div className="container-fluid">
            <div className="card p-4">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Preco" aria-label="Preco" aria-describedby="basic-addon1" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-primary" type="button" onClick={() => {
                            if (isEditing) {
                                const servicoAtualizado = new Servico(props.servicoEmEdicao!.id, nome, preco)
                                props.atualizarServico(servicoAtualizado)
                            } else {
                                props.cadastrarServico(new Servico(Math.random(), nome, preco))
                            }
                        }}>{isEditing ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioCadastroServico;