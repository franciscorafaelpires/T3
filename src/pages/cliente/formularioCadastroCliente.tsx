import React, { useState, useEffect } from "react";
import Cliente from "../../model/cliente";
import CPF from "../../model/cpf";

type props = {
    cadastrarCliente: (cliente: Cliente) => void,
    clienteEmEdicao: Cliente | null,
    atualizarCliente: (cliente: Cliente) => void,
}

const FormularioCadastroCliente: React.FC<props> = (props) => {
    const [nome, setNome] = useState(props.clienteEmEdicao?.nome || '');
    const [nomeSocial, setNomeSocial] = useState(props.clienteEmEdicao?.nomeSocial || '');
    const [cpf, setCpf] = useState(props.clienteEmEdicao?.getCpf.getValor || '');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState(props.clienteEmEdicao?.getCpf.getDataEmissao.toISOString().split('T')[0] || '');

    useEffect(() => {
        setNome(props.clienteEmEdicao?.nome || '');
        setNomeSocial(props.clienteEmEdicao?.nomeSocial || '');
        setCpf(props.clienteEmEdicao?.getCpf.getValor || '');
        setDataEmissaoCpf(props.clienteEmEdicao?.getCpf.getDataEmissao.toISOString().split('T')[0] || '');
    }, [props.clienteEmEdicao]);

    const isEditing = props.clienteEmEdicao !== null
    return (
        <div className="container-fluid">
            <div className="card p-4">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" value={dataEmissaoCpf} onChange={(e) => setDataEmissaoCpf(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-primary" type="button" onClick={() => {
                            if (isEditing) {
                                const clienteAtualizado = new Cliente(props.clienteEmEdicao!.id, nome, nomeSocial, new CPF(cpf, new Date(dataEmissaoCpf)))
                                props.atualizarCliente(clienteAtualizado)
                            } else {
                                props.cadastrarCliente(new Cliente(Math.random(), nome, nomeSocial, new CPF(cpf, new Date(dataEmissaoCpf))))
                            }
                        }}>{isEditing ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioCadastroCliente;