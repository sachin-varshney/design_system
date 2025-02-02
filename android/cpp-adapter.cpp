#include <jni.h>
#include "react-native-dehaat-design-system.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_dehaatdesignsystem_DehaatDesignSystemModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return dehaatdesignsystem::multiply(a, b);
}
