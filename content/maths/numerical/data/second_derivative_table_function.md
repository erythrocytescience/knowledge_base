---
title: "Вторая производная от табличной функции N переменных"
date: 2025-01-25
tags: ["вторая производная", "табличная функция"]
math: true

---


<div style="text-align: justify;">

Пусть дана функция N переменных в \( f(x_1, x_2, ..., x_N) \) в табличном виде
| \(x_1\) | \(x_2\) | .... | \( x_N \)| \( f_1 \) |
| --- | --- | --- | --- | --- |
| 1.0 | 1.0 | ... | 2.0 | 1.0 |
| 4.0 | 5.0 | ... | 2.0 | 2.0 |

В общем случае будем считать, что табуляция переменных функции неравномерная. 

### 1. Вторая производная от одной переменной \(x_i\)

<!-- Пусть \(\mathbf{k} = \left(k_1, k_2,..., k_N\right) \) мульти-индекс сеточных узлов, где \(k_i\) указывает 
на индекс вдоль оси \(x_i\). -->

На неравномерной многомерной сетке вторая производная в точке \(x^{*}\) вычисляется как 

$$
\dfrac{\partial^2 f}{\partial x_i^2} \approx c_{-1} f(x_i^{k-1}, x^{*}) + c_0 f(x_i^k, x^{*}) + c_1 f(x_i^{k+1}, x^{*}) \\ \\ \\
c_{-1} = \dfrac{2}{h_1 \left(h_1 + h_2\right)}, \;\;
c_0 = - \dfrac{2}{h_1  h_2}, \;\;
c_1 = \dfrac{2}{h_2 \left(h_1 + h_2\right)}
\quad(1)
$$
где
- \(k\) -- индекс вдоль оси \(x_i\) [для удобства будем иметь в виду, что \(k\) здесь это \(k_i\), ]
- \(h_1 = x_i^k - x_i^{k-1}\),
- \(h_2 = x_i^{k+1} - x_i^k\),
- \(f(x_i^j, x^{*}) \) -- значения функции в точках \( x_i^j \), при этом \(x_m, \; m \neq i\) такие же как в \(x^{*}\).

#### 1.1. Граничный случай. 

##### k = 0. 

$$
\dfrac{\partial^2 f}{\partial x_i^2} \approx c_{-1} f(x_i^{k+1}, x^{*}) + c_0 f(x_i^{k}, x^{*}) + c_1 f(x_i^{k+2}, x^{*}) \\ 
h_1 = x_i^{k+1} - x_i^k, \;\; h_2 = x_i^{k+2} - x_i^{k+1}
\quad(2)
$$

##### k = \(n_i\). 
$$
\dfrac{\partial^2 f}{\partial x_i^2} \approx c_{-1} f(x_i^{k-2}, x^{*}) + c_0 f(x_i^{k}, x^{*}) + c_1 f(x_i^{k-1}, x^{*}) \\ 
h_1 = x_i^{k} - x_i^{k-1}, \;\; h_2 = x_i^{k-1} - x_i^{k-2}
\quad(3)
$$

### 2. Смешенная вторая производная от \(x_i\) и \(x_j\)

Будем использовать центральную разницу

$$
\dfrac{\partial^2 f}{\partial x_i \partial x_j} \approx
\dfrac{1}{h_i h_j}
\left(
f(x_i^{k_i+1}, x_j^{k_j+1}, x^{*}) - 
f(x_i^{k_i+1}, x_j^{k_j-1}, x^{*}) - 
f(x_i^{k_i-1}, x_j^{k_j+1}, x^{*}) + 
f(x_i^{k_i-1}, x_j^{k_j-1}, x^{*})
\right)
\quad(4)
$$
где
- \(h_i = x_i^{k_i + 1} - x_i^{k_i}\),
- \(h_j = x_j^{k_j+1} - x_j^{k_j}\).

#### 2.1 Граничный случай

##### \(k_i = 0\)
$$
\dfrac{\partial^2 f}{\partial x_i \partial x_j} \approx
\dfrac{1}{h_i h_j}
\left(
f(x_i^{k_i+1}, x_j^{k_j+1}, x^{*}) - 
f(x_i^{k_i+1}, x_j^{k_j-1}, x^{*}) - 
f(x_i^{k_i}, x_j^{k_j+1}, x^{*}) + 
f(x_i^{k_i}, x_j^{k_j-1}, x^{*})
\right) \\
h_i = x_i^{k_i + 1} - x_i^{k_i}, \;\; h_j = x_j^{k_j+1} - x_j^{k_j}
\quad(5)
$$

##### \(k_j = 0\)
$$
\dfrac{\partial^2 f}{\partial x_i \partial x_j} \approx
\dfrac{1}{h_i h_j}
\left(
f(x_i^{k_i+1}, x_j^{k_j+1}, x^{*}) - 
f(x_i^{k_i+1}, x_j^{k_j}, x^{*}) - 
f(x_i^{k_i-1}, x_j^{k_j+1}, x^{*}) + 
f(x_i^{k_i-1}, x_j^{k_j}, x^{*})
\right) \\
h_i = x_i^{k_i + 1} - x_i^{k_i}, \;\; h_j = x_j^{k_j+1} - x_j^{k_j}
\quad(6)
$$

##### \(k_i = n_i\)
$$
\dfrac{\partial^2 f}{\partial x_i \partial x_j} \approx
\dfrac{1}{h_i h_j}
\left(
f(x_i^{k_i}, x_j^{k_j+1}, x^{*}) - 
f(x_i^{k_i}, x_j^{k_j-1}, x^{*}) - 
f(x_i^{k_i-1}, x_j^{k_j+1}, x^{*}) + 
f(x_i^{k_i-1}, x_j^{k_j-1}, x^{*})
\right) \\
h_i = x_i^{k_i} - x_i^{k_i-1}, \;\; h_j = x_j^{k_j+1} - x_j^{k_j}
\quad(7)
$$

##### \(k_j = n_j\)
$$
\dfrac{\partial^2 f}{\partial x_i \partial x_j} \approx
\dfrac{1}{h_i h_j}
\left(
f(x_i^{k_i+1}, x_j^{k_j}, x^{*}) - 
f(x_i^{k_i+1}, x_j^{k_j-1}, x^{*}) - 
f(x_i^{k_i-1}, x_j^{k_j}, x^{*}) + 
f(x_i^{k_i-1}, x_j^{k_j-1}, x^{*})
\right) \\
h_i = x_i^{k_i+1} - x_i^{k_i}, \;\; h_j = x_j^{k_j} - x_j^{k_j-1}
\quad(8)
$$


</div>
