/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    m = nums1.length;
    n = nums2.length;
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }
    begin = 0, end = m;
    i = 0, j = 0;
    ivpre = 0, jvpre = 0;
    iv = 0, jv = 0;
    leftmax = 0;rightmin = 0;
    while(begin <= end){
        i = Math.floor((begin + end) / 2);
        j = Math.floor((m + n + 1) / 2 - i);
        ivpre = i > 0 ? nums1[i - 1] : -Infinity;
        iv = i < m ? nums1[i] : Infinity;
        jvpre = j > 0 ? nums2[j - 1] : -Infinity;
        jv = j < n ? nums2[j] : Infinity;
        if (ivpre < jv){
            leftmax = Math.max(ivpre, jvpre);
            rightmin = Math.min(iv, jv);
            begin = i + 1;
        } else {
            end = i - 1;
        }
    }
    if ((m + n) % 2 == 0){
        return (leftmax + rightmin) / 2;
    } else {
        return leftmax;
    }
};

var nums1 = [];
var nums2 = [2, 3];
fret = findMedianSortedArrays(nums1, nums2);
console.log(fret);