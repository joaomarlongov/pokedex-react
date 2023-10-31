import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PokemonStats({ pokemonData }) {


        const { weight, stats, height } = pokemonData;
    
        function calcularSomaBaseStat() {
            let soma = 0;
            stats.forEach((stat) => {
                soma += stat.base_stat;
            });
            return soma;
        }

        const somaBaseStat = calcularSomaBaseStat();

    return (

        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Altura</TableCell>
                        <TableCell>Peso</TableCell>
                        <TableCell>Soma dos Stats</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{height}m</TableCell>
                        <TableCell>{weight}kg</TableCell>
                        <TableCell>{somaBaseStat}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
