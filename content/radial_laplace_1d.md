---
title: 'Решение одномерного уравнения пьезопроводности в плоско-радиальной постановке'
date: 2024-07-03
tags: ["одномерная", "плоско-радиальная", "пьезопроводность", "давление"]
math: true

---

Рассмотрим уравнение 
$$
\begin{array}l
\dfrac{1}{r}\dfrac{d}{dr} \left(r\dfrac{dp}{dr}\right) = 0, \;\; r_{w} < r < r_{c}; \\
p(r_{w}) = p_{w}, \;\; p(r_{c}) = p_{c}
\end{array}
\qquad (1)
$$

Решение уравнение будет в виде
<!-- $$
p(r) = C_1 \ln(r) + C_2.
$$ -->
$$
\displaystyle
\begin{array}l
r \dfrac{dp}{dr} = c_{1} \;\; \Rightarrow \dfrac{dp}{dr} = \dfrac{c_{1}}{r} \Rightarrow \operatorname{\Large\int}{\dfrac{dp}{dr} dr} = c_{1} \cdot \operatorname{\Large\int}{\dfrac{1}{r}dr} \Rightarrow \;\; p(r) = c_{1} \cdot \ln(r) + c_{2}
\end{array}
\qquad (2)
$$

Для нахождения коэффициентов \(c_{1}, c_{2}\) составим систему уравнений, используя (2) граничные условия из (1)

$$
\left\{
\begin{array}l
p(r_{w}) & = \; c_{1} \cdot \ln(r_{w}) + c_{2} & = \; p_{w} \\
p(r_{c}) & = \; c_{1} \cdot \ln(r_{c}) + c_{2} & = \; p_{c} \\
\end{array}
\right.
\qquad (3)
$$

Вычтем первое (из (3)) уравнение из второго
$$
c_{1} \cdot \left[\ln(r_{c}) - \ln(r_{w})\right] = p_{c} - p_{w},
$$

Откуда получим
$$
c_{1} = \dfrac{p_{c} - p_{w}}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)}.
$$

Подставим \(c_1\) в первое уравнение из (3) и найдем \(c_2\).
$$
c_{2} = \dfrac{p_{w}\cdot \ln(r_{c}) - p_{c} \cdot \ln(r_{w})}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)}.
$$


<details>
<summary>Подробное вычисление \(c_2\)</summary>
$$
\begin{array}l
c_{2} = p_{w} - c_{1} \cdot \ln(r_{w}) = p_{w} - \dfrac{\ln(r_{w})\left(p_{c} - p_{w}\right)}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)} = \dfrac{p_{w} \cdot\ln\left(\dfrac{r_{c}}{r_{w}}\right) - p_{c} \cdot \ln(r_{w}) + p_{w} \cdot \ln(r_{w})}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)} = \\ = \dfrac{p_{w} \cdot \left[ \ln(r_{c}) - \ln(r_{w})\right] - p_{c} \cdot \ln(r_{w}) + p_{w} \cdot \ln(r_{w})}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)} = \dfrac{p_{w}\cdot \ln(r_{c}) - p_{c} \cdot \ln(r_{w})}{\ln\left(\dfrac{r_{c}}{r_{w}}\right)}.
\end{array}
$$
</details>

Тогда получим решение
$$
\begin{array}l
p(r) = \dfrac{p_c -p_w}{\ln\left(\dfrac{r_c}{r_w} \right)}\ln(r) + \dfrac{p_{w}\cdot \ln(r_{c}) - p_{c} \cdot \ln(r_{w})}{\ln\left(\dfrac{r_c}{r_w} \right)} = \\
= \dfrac{p_c\ln\left(\dfrac{r}{r_w} \right) + p_w\ln\left(\dfrac{r_c}{r} \right)}{\ln\left(\dfrac{r_c}{r_w} \right)}
\end{array}
$$

<div style="border: 3px solid red">
$$
\begin{array}l
p(r) = \dfrac{p_c\ln\left(\dfrac{r}{r_w} \right) + p_w\ln\left(\dfrac{r_c}{r} \right)}{\ln\left(\dfrac{r_c}{r_w} \right)}
\end{array}
\qquad (4)
$$
</div>
