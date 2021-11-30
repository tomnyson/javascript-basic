#include <iostream>
using namespace std;

int main()
{
  // câu điều kiện if else 2 điều kiện
  // int n = 5;

  // if (n % 2 == 0)
  // {
  //   cout << "số chẵn" << endl;
  // }
  // else
  // {
  //   cout << "số lẻ" << endl;
  // }
  // -> giỏi, khá , trung bình , yếu
  // dtb: <5 yếu, 5 <= dtb <6.5 tb, 6.5<= dtb <= 8.0 khá
  // 8.0<= dtb <= 10;
  // step 1: khái báo biến
  float dtb;
  // step 2: nhập liệu từ [0-10]
  cout << "nhập điểm tb của học sinh" << endl;
  cin >> dtb;
  while (dtb < 0 || dtb > 10)
  {
    cin >> dtb;
  }
  // step 3: check điều kiện
  if (dtb >= 8.0)
  {
    cout << "học lực giỏi" << endl;
  }
  else if (dtb >= 6.5)
  {
    cout << "học lực khá" << endl;
  }
  else if (dtb >= 5)
  {
    cout << "học lực trung bình" << endl;
  }
  else
  {
    cout << "học lực yếu" << endl;
  }
  return 0;
}
