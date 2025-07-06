import React, { useState, useEffect } from "react";
import Produto from "../../model/produto";

type props = {
    cadastrarProduto: (produto: Produto) => void,
    produtoEmEdicao: Produto | null,
    atualizarProduto: (produto: Produto) => void,
}

const FormularioCadastroProduto: React.FC<props> = (props) => {
    const [nome, setNome] = useState(props.produtoEmEdicao?.nome || '');
    const [preco, setPreco] = useState(props.produtoEmEdicao?.preco || 0);

    useEffect(() => {
        setNome(props.produtoEmEdicao?.nome || '');
        setPreco(props.produtoEmEdicao?.preco || 0);
    }, [props.produtoEmEdicao]);

    const isEditing = props.produtoEmEdicao !== null
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
                                const produtoAtualizado = new Produto(props.produtoEmEdicao!.id, nome, preco)
                                props.atualizarProduto(produtoAtualizado)
                            } else {
                                props.cadastrarProduto(new Produto(Math.random(), nome, preco))
                            }
                        }}>{isEditing ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioCadastroProduto;