// Aniket Bose
#include <bits/stdc++.h>
using namespace std;
#define ll long long int
void print(int board[][9], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << board[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

bool isValid(int board[][9], int i, int j, int k, int n)
{
    // row check

    for (int col = 0; col < n; col++)
    {
        if (board[i][col] == k)
        {
            return false;
        }
    }

    // col check

    for (int row = 0; row < n; row++)
    {
        if (board[row][j] == k)
        {
            return false;
        }
    }

    // submatrix check
    int rt = sqrt(n);
    int start_index_i = i - i % rt;
    int start_index_j = j - j % rt;

    for (int x = start_index_i; x < start_index_i + rt; x++)
    {
        for (int y = start_index_j; y < start_index_j + rt; y++)
        {
            if (board[x][y] == k)
            {
                return false;
            }
        }
    }

    return true;
}
bool SudukoSolver(int board[][9], int i, int j, int n)
{
    if (i == n)
    {
        print(board, n);
        return true;
    }
    // if we are not inside board
    if (j == n)
    {
        return SudukoSolver(board, i + 1, 0, n);
    }
    // if cell is already filled
    if (board[i][j] != 0)
    {
        return SudukoSolver(board, i, j + 1, n);
    }
    // first try to fill number from 1-9 in such a  way that it is not present in row or col
    for (int k = 1; k <= 9; k++)
    {
        // check whether it can be filled or not
        if (isValid(board, i, j, k, n))
        {
            board[i][j] = k;
            bool subAns = SudukoSolver(board, i, j + 1, n);
            if (subAns)
            {
                return true;
            }
            // backtracking
            board[i][j] = 0;
        }
    }

    return false;
}