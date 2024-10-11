---
title: "Решение системы линейных уравнений с двумя неизвестными"
date: 2024-07-20
tags: ["Линейная система", "СЛАУ", "Математика"]
language: 'ru-RU'
---

Дана система c двумя неизвестными \(C_1, \; C_2\), которая имеет решение (то есть определить не равен нулю):

$$
\displaystyle
\left\{ 
  \begin{array}{l}
    C_1 \cdot A + C_2 \cdot B = D \\
    C_1 \cdot E + C_2 \cdot F = H
  \end{array}
\right.
$$

Тогда решением этой системы будет:

$$
\displaystyle
\begin{array}l
C_1 = \dfrac{D \cdot F - B \cdot H}{K} \\ \\
C_2 = \dfrac{A \cdot H - D \cdot E}{K} \\ \\
K = A \cdot F - B \cdot E
\end{array}
$$
при условии, что \(K \neq 0\).

### Проверка
$$
\displaystyle
\begin{array}l
\dfrac{D \cdot F - B \cdot H}{K} \cdot A + \dfrac{A \cdot H - D \cdot E}{K} \cdot B = D \\ \\ 
\dfrac{D \cdot F \cdot A - \cancel{B \cdot H \cdot A} + \cancel{A \cdot H \cdot B} - D \cdot E \cdot B}{K} = D \\ \\ 
\dfrac{D \cdot \left[A \cdot F - B \cdot E \right]}{K} = D \Rightarrow 
\dfrac{D \cdot K}{K} = D \Rightarrow  D = D 
\end{array} 
$$


