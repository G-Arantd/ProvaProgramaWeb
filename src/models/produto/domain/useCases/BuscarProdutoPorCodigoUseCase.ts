

import { ProdutoRepository } from "../../data/repository/ProdutoRepository";
import { Produto } from "@prisma/client";

export class BuscarProdutoPorCodigoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(codigo: number): Promise<Produto | null> {
        try {

            return await this.produtoRepository.buscarProdutoPorCodigo(codigo)

        } catch (error) {
            throw new Error("Problema ao deletar produto")
        }
    }

}